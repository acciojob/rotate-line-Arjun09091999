//your JS code here. If required.
 const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      // Set the initial position and angle of the line
      let x = canvas.width / 2;
      let y = canvas.height / 2;
      let angle = 0;

      // Set the rotation speed
      const rotationSpeed = 0.02;

      // Function to draw the rotating line
      function drawLine() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate the new position of the line
        const lineLength = 100;
        const newX = x + Math.cos(angle) * lineLength;
        const newY = y + Math.sin(angle) * lineLength;

        // Draw the line
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(newX, newY);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Update the position and angle for the next frame
        x = newX;
        y = newY;
        angle += rotationSpeed;
      }

      // Set up the animation loop
      function animate() {
        // Call the drawLine function
        drawLine();

        // Request the next animation frame
        requestAnimationFrame(animate);
      }

      // Start the animation loop
      animate();
