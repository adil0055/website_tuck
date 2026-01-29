const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏗️  Starting build for AWS deployment...');

// 1. Run the build
try {
    execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
    console.error('❌ Build failed.');
    process.exit(1);
}

const deployDir = path.join(__dirname, 'deploy-package');
const standaloneDir = path.join(__dirname, '.next', 'standalone');
const staticDir = path.join(__dirname, '.next', 'static');
const publicDir = path.join(__dirname, 'public');

// 2. Clear valid previous deployment package
if (fs.existsSync(deployDir)) {
    fs.rmSync(deployDir, { recursive: true, force: true });
}
fs.mkdirSync(deployDir);

console.log('📦 Packaging files...');

// 3. Copy Standalone build
// This contains the server.js and minimal node_modules
fs.cpSync(standaloneDir, deployDir, { recursive: true });

// 4. Copy Static assets (Next.js requires these to be in .next/static)
// The standalone build expects .next/static to be inside the root of the serving directory
const destNextStatic = path.join(deployDir, '.next', 'static');
fs.mkdirSync(path.dirname(destNextStatic), { recursive: true });
fs.cpSync(staticDir, destNextStatic, { recursive: true });

// 5. Copy Public folder (images, icons, etc.)
const destPublic = path.join(deployDir, 'public');
fs.cpSync(publicDir, destPublic, { recursive: true });

console.log('✅ Deployment package created at: ./deploy-package');
console.log('👉 To deploy to AWS (Elastic Beanstalk / EC2):');
console.log('   1. Zip the contents of the "deploy-package" folder.');
console.log('   2. Upload the zip file.');
console.log('   3. Ensure you set RESEND_API_KEY environment variable in your AWS dashboard.');
console.log('   4. The start command is: node server.js');
