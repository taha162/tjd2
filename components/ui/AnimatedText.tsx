import React from "react";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function StaggerContainer({
  children,
  className = "",
  staggerDelay,
}: StaggerProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}