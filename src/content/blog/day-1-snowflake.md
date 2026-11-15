---
title: "Day 1: Snowflake"
description: "Starting a series on Snowflake — architecture basics and why it matters for data engineering."
pubDate: 2026-09-02
tags: ["snowflake"]
---

Today I'm starting a series documenting what I learn (and re-learn) about
Snowflake as I use it day to day.

## Why Snowflake

A few things that make it different from a traditional data warehouse:

- Storage and compute are separated — you scale them independently
- Virtual warehouses can be spun up/down without touching the underlying data
- Time travel and zero-copy cloning make experimentation cheap

## What's next

Over the next few posts I'll cover:

- Warehouse sizing and cost tradeoffs
- Stages and how data actually lands in Snowflake
- Where dbt fits on top of this
