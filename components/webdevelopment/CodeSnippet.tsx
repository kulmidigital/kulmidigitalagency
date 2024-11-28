"use client";
import { Highlight, themes } from "prism-react-renderer";

const exampleCode = `
// Example Next.js API Route
export async function GET(request: Request) {
  try {
    const data = await fetchData();
    return NextResponse.json({
      status: "success",
      data
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: error.message
    }, { status: 500 });
  }
}

// Example React Component
export default function ProductCard({ product }) {
  return (
    <div className="rounded-xl p-6 shadow-lg">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
      />
      <h2 className="text-xl font-bold">
        {product.name}
      </h2>
      <p className="text-gray-600">
        {product.description}
      </p>
      <Button onClick={handlePurchase}>
        Buy Now
      </Button>
    </div>
  );
}
`;

const CodeSnippet = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F56E0F] to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative bg-[#1E293B] rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0F172A]">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <Highlight
          theme={themes.nightOwl}
          code={exampleCode.trim()}
          language="tsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="p-4 overflow-auto" style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="text-gray-500 mr-4">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeSnippet; 