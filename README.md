First Edit (JW logo) DO NOT MERGE TO MAIN

This edit included the JW.org logo 


# **1. Setup**

Flash an SD card 16gb or bigger with a FULL desktop version of Raspberry Pi OS Bullseye
When the login prompt appears, login with
  - user: pi
  - password: raspberry

	    $ Run sudo raspi-config

   1. In "1 System Options" do the following
   - First, Set Wirless. "S1 Wireless Lan" and set your wireless network.
   - Second, Set the password for the pi account. "S3 Password" make sure you do NOT chance the username.
   - Third, Set Hostname. "S4 Hostname" Defualt Should be "raspberrypi.local" But for networks with multiple Raspberry pi's you need to add a number to the end
   - Forth, Allow Auto Login. "S5 Boot / Auto Login" Choose "B4 Desktop Autologin"

   2 . In "3 Interface Options" Do the following
   - "I2 SSH" Enable ssh

   3. In "5 Localisation Options" Do the Following
   - "L2 Timezone" Set Your Timezone
   - "L4 WLAN Country" Set Wireless Channels for your Country

   4. Update System. Exit the config menu and reboot pi then run the following
	  
    $ sudo apt update
    $ sudo apt upgrade

# **2. Install Other Needed Software**

    sudo apt install –no-install-recommends xserver-xorg x11-xserver-utils xinit openbox chromium-browser xdotool
(That’s one long line, make sure you get all of it.)

    sudo apt install git

# **3. Get the Clock App**
You can clone my pi-clock stuff from GitHub.
  
    $ mkdir tmp
    $ cd tmp
    $ git clone https://github.com/Jaddy4567/pi-clock
    $ cd pi-clock
    $ ./install.sh

This will do several things:
* Create and populate the directory ~/pi-clock to hold web content to be served locally.
* Add a .bash_profile to start the X server automatically upon login.
* Add an Openbox autostart configuration to do a few things: setup DPMS, clean up chromium’s previous exit, launch a local webserver, then launch chromium-browser at the local URL. Chromium is launched in incognito, kiosk, without warnings and popups, so there is minimal distraction.
* Install a checkhealth script and a cronjob to call it; this will reboot the Raspberry Pi if there is persistent network reachability problems.
You can read install.sh as well as the other files so get an idea of how things work. All the web content is presently served out of ~/pi-clock, but you can easily change to host that at a central web server.

# **Final Notes **

If ./install.sh gives an error run the following

	chmod u+x install.sh

Then run the install command again


If Application is not working press 
- CTRL + ALT + F2
To return to Command Line

If you want to return to the clock use 
- CTRL + ALT + F7

Note Once Software is installed then you cannot access the Desktop enviroment **EVER AGAIN**

Use SSH and MinSCP to Easily Transfer / edit files. Or use Terminal on pi with display and keyboard

# **Compatability**

Compatible with pi zero 2w, pi3,4,400,5


