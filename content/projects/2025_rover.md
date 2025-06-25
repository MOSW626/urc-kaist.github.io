---
title: 2025 URC Rover
date: 2025-06-25
draft: false
image: img/projects/2025_rover.png
---

## Introduction
We have developed a highly modular rover tailored for the URC SAR 2025 competition. Designed around quick interchangeability of science and manipulator modules, this platform emphasizes maintainability, reliability, and versatile mission performance across both delivery and science tasks.

## Communication & Positioning
We developed communication protocols ensure low-latency, reliable data exchange between rover subsystems. Dual RTK GNSS receivers, supplemented by an IMU and RGB-D camera, fuse positioning data to achieve centimeter­-level accuracy. AR tags detected via OpenCV further refine pose estimation during autonomous navigation.

## Autonomy & Mission Performance
An in-house SLAM algorithm, “time map,” builds and updates a 3D representation of the environment in real time. The fusion of SLAM, RTK/IMU data, and AR tag recognition allows us to execute complex tasks—ranging from precise sample collection to module swaps—without human intervention beyond initial target specification.

## Outcome & Looking Ahead
Although we did not qualify for the final round of URC SAR 2025, the insights gained from design, simulation, and field testing have been invaluable. We’re already applying lessons learned toward our next challenge and eagerly anticipate returning stronger at URC 2026.
