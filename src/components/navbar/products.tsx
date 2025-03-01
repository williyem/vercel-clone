import React from "react";

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-8 w-[700px] text-white">
      {/* DX Platform */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-neutral-400">
          DX Platform
        </h3>
        <ProductItem
          icon="📦"
          title="Previews"
          description="Helping teams ship 6× faster"
        />
        <ProductItem
          icon="✨"
          title="AI"
          description="Powering breakthroughs"
        />
      </div>

      {/* Managed Infrastructure */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-neutral-400">
          Managed Infrastructure
        </h3>
        <ProductItem
          icon="⚙️"
          title="Fluid compute"
          description="Servers, in serverless form"
        />
        <ProductItem
          icon="🌍"
          title="Rendering"
          description="Fast, scalable, and reliable"
        />
        <ProductItem
          icon="📊"
          title="Observability"
          description="Trace every step"
        />
        <ProductItem
          icon="🛡️"
          title="Security"
          description="Scale without compromising"
        />
      </div>

      {/* Open Source */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-neutral-400">
          Open Source
        </h3>
        <ProductItem
          icon="⚫"
          title="Next.js"
          description="The native Next.js platform"
        />
        <ProductItem
          icon="🌀"
          title="Turborepo"
          description="Speed with Enterprise scale"
        />
        <ProductItem
          icon="📦"
          title="AI SDK"
          description="The AI Toolkit for TypeScript"
        />
      </div>
    </div>
  );
};

// Reusable Product Item Component
const ProductItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start gap-3 mb-3">
      <div className="flex items-center justify-center w-7 h-7 bg-neutral-800 rounded-md">
        <span className="text-lg">{icon}</span>
      </div>
      <div>
        <h4 className="text-sm font-medium text-white">{title}</h4>
        <p className="text-xs text-neutral-400">{description}</p>
      </div>
    </div>
  );
};

export default Products;
