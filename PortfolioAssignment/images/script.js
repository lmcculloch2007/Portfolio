const canvas = document.querySelector("#bg");

if (canvas) {
    const ctx = canvas.getContext("2d");

    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        particles = Array.from({ length: 45 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() - 0.5,
            vy: Math.random() - 0.5
        }));
    }

    function drawParticles() {
        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach((particle, index) => {

            particle.x += particle.vx;
            particle.y += particle.vy;

            if (
                particle.x < 0 ||
                particle.x > canvas.width
            ) {
                particle.vx *= -1;
            }

            if (
                particle.y < 0 ||
                particle.y > canvas.height
            ) {
                particle.vy *= -1;
            }

            ctx.fillStyle = "#22D3EE";

            ctx.fillRect(
                particle.x,
                particle.y,
                2,
                2
            );

            particles
                .slice(index + 1)
                .forEach(otherParticle => {

                    const distance = Math.hypot(
                        particle.x - otherParticle.x,
                        particle.y - otherParticle.y
                    );

                    if (distance < 140) {

                        ctx.strokeStyle =
                            `rgba(100, 116, 139, ${1 - distance / 140})`;

                        ctx.beginPath();

                        ctx.moveTo(
                            particle.x,
                            particle.y
                        );

                        ctx.lineTo(
                            otherParticle.x,
                            otherParticle.y
                        );

                        ctx.stroke();
                    }
                });
        });

        requestAnimationFrame(drawParticles);
    }

    window.addEventListener(
        "resize",
        resizeCanvas
    );

    resizeCanvas();
    drawParticles();
}