# Use the Windows Server Core image as the base image
FROM mcr.microsoft.com/windows/servercore:ltsc2019

# Create a directory for the script
WORKDIR C:\app

# Copy the script into the container
COPY my_script.bat .

# Set the entry point for the container to execute the script
CMD ["cmd", "/C", "my_script.bat"]