---
title: lux robotics
description: open-source computer-vision platform
tags:
  - project
  - computer-vision
  - file-icon
---

<figure>
<video src="./log_replay.mp4" autoplay loop muted playsinline disablepictureinpicture style="width: min(800px, 100%); display: block;"></video>
<figcaption>a very early version of the software stack running real-time AprilTag detection in the FIRST robotics competition</figcaption>
</figure>

---

## About:
lux robotics is a hardware/software/firmware computer vision camera project aimed at developing an open-source computer vision edge-platform at an accessible price and high-performance ceiling.

<figure>
<img src="./IMG_5400.JPG" alt="CAD of the camera" style="width: min(398px, 100%);" />
<figcaption></figcaption>
</figure>

---

## Where it all started:
lux stemmed from a need for better robotic localization within the [FIRST](/projects/02-first/) robotics competition. Our existing solution ran software written by others on cheap global-shutter USB webcams and single-board computers. The result was inaccurate at localizing, had latency unusably slow for any movement and more importantly, I had no idea how any of it worked.

This need sparked one overly-ambitious idea:
- Could I design our own vision solution using the best-hardware and with my own software?


## Existing Solutions:

- Proprietary "black-boxes" using closed-source software offered little transparency, tunability or room for improvement. (ex. [Limelight](https://limelightvision.io/)) Availability was constrained by a single supplier.
- Open-source projects such as [PhotonVision](https://photonvision.org/) were seen as the status quo, but relied on slow USB webcams as cameras causing MJPEG compression and limiting max framerates all with huge latency and processing overhead penalties.

---

## Hardware:
I did all schematic and layout work using EasyEDA Pro for its superior integration with LCSC and JLCPCB's PCB assembly service.
Edge-compute is handled by an 8-A55/A76-core Rockchip RK3588 based SoM.
The sensor module is built around the global-shutter AR0234 capable of 1920x1200@120fps over 4-lane mipi and pixel-binning modes for improved signal-to-noise low-light performance.
The carrier PCB features a robust 4-48v power input, 10/100 PoE, USB-C 3.1, and a micro-sd card-slot for logging.
Real-world power draw is 9 watts average, 11 watts max.

**Despite being custom, the price per camera comes out to less than a Limelight 4 (comparable COTS solution).**

<figure>
<img src="./lux-cad.png" alt="CAD of the camera" style="width: min(398px, 100%);" />
<img src="./Screenshot 2025-12-26 205247.png" alt="CAD of the camera" style="width: min(398px, 100%);" />
<figcaption>Packaging without sacrificing performance was a key consideration in the design of the camera</figcaption>
</figure>

---

<figure style="text-align: center;">
<img src="./Screenshot 2025-12-31 003908.png" alt="CAD of the camera" style="width: min(398px, 100%);" />
<figcaption>really proud of this one</figcaption>
</figure>


---

## Software:
I developed the full software stack. The current application is AprilTag detection and Perspective-n-Point pose optimization running on the CPU alongside neural-network based object detection on the built-in 6-TOPS NPU. Later work aims to offload AprilTag detection partly to the Mali-G610 GPU. A small web UI allows for debugging in the field.

As this is an open-source platform, the door is open to running any and all computer-vision applications.

With AprilTags, 120fps sub-cm accuracy localization is achieved.

<figure>
<video src="./jeffreyDemo.mp4" autoplay loop muted playsinline disablepictureinpicture style="width: min(800px, 100%); display: block;"></video>
<figcaption>Web UI of the camera previewing the AprilTag detection. </figcaption>
</figure>

---

<figure style="text-align: center;">
<img src="./Screenshot 2026-01-21 at 5.39.35 PM.png" alt="camera with machinued alumium side mount" style="width: min(398px, 100%);" />
<figcaption>A visualization of the lens distortion accounted for by the calibration</figcaption>
</figure>

---

## Firmware:
I wrote the firmware stack, which utilizes the ISP hardware of the SoC and runs Debian with custom kernel device-tree drivers to achieve low-latency zero-copy, uncompressed, and configurable streaming. Libcamera integration is planned.
I also built an accompanying desktop app that manages device eMMC flashing, configuration, etc.

<figure>
<img src="./Screenshot 2025-12-30 173409.png" alt="v0" style="width: min(398px, 100%);" />
<figcaption>Many custom Linux device tree drivers were needed to interface with the sensors and custom PCB hardware</figcaption>
</figure>

---

<figure>
<video src="./latencytest.mp4" autoplay loop muted playsinline disablepictureinpicture style="width: min(800px, 100%); display: block;"></video>
<figcaption>An end to end (photon to pose) latency test demonstrating the speed of the zero-copy pipeline</figcaption>
</figure>


<hr>

## Research:

Original AprilTag research [paper](https://docs.wpilib.org/en/stable/_downloads/50ad8f5c37aa2b4f174a3fde0fd71137/olson2011tags.pdf)

I also wrote an introductory research paper around the issues of AprilTag ambiguity and performance scaling bottlenecks: [paper](./Improving%20AprilTag%20Based%20Localization%20Performance%20and%20Accuracy%20for%20Robotics.pdf)

## Accolades:

- x3 FIRST Innovation in Control Award (Glendale, Norcal Championship, Newton Division @ Houston World Championship)
- x1 FIRST Excellence in Engineering Award (Ventura)

## Acknowledgments:

- Benson Zhou - initial "Iris" software 2024-2025
- Jeffrey Fan - lux software 2025-2026
- Dad

More info to come at [luxrobotics.io](https://luxrobotics.io)

[Project Github](https://github.com/orgs/Lux-Robotics/repositories)

---

## Hardware Iterations: