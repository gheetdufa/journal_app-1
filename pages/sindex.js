import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Code Analyzer</h1>
      <Link href="/analyze">Analyze Code</Link>
    </div>
  );
};

export default Index;
