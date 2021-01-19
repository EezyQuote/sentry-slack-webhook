import { useState } from 'react';

export default function TestPage() {
  const [result, setResult] = useState();
  const handleTest = async () => {
    if (process.env.NODE_ENV === 'development') {
      const res = await fetch(
        `/api/${process.env.NEXT_PUBLIC_SLACK_ENDPOINT}`,
        {
          method: 'POST',
          body: JSON.stringify({
            id: '123456789',
            project: 'website',
            project_name: 'eezyquote',
            project_slug: 'website',
            logger: null,
            level: 'error',
            culprit: 'raven.scripts.runner in main',
            message: 'This is an example Python exception',
            url: window.location.pathname,
            triggering_rules: [],
            event: {
              event_id: 'c5ee26876f91438a847eb4efe95b305a',
              level: 'error',
              version: '5',
              type: 'default',
              logentry: [Object],
              logger: '',
              modules: [Object],
              platform: 'python',
              timestamp: 1611066870.238704,
              received: 1611066870.239563,
              environment: 'prod',
              user: [Object],
              request: [Object],
              contexts: [Object],
              stacktrace: [Object],
              tags: [Array],
              extra: [Object],
              fingerprint: [Array],
              hashes: [Array],
              metadata: [Object],
              title: 'This is an example Python exception',
              location: null,
              culprit: 'raven.scripts.runner in main',
              _ref: 5597207,
              _ref_version: 2,
              _metrics: [Object],
              id: 'c5ee26876f91438a847eb4efe95b305a',
            },
          }),
        }
      ).then((res) => res.json());

      setResult(res);
    }
  };

  return (
    <div>
      <button onClick={handleTest}>Trigger Test</button>
      <div className="codeblock">
        <code>{JSON.stringify(result, null, 2)}</code>
      </div>
      <style jsx>
        {`
          .codeblock {
            margin-top: 20px;
            padding: 20px;
            background: #eaeaea;
          }
        `}
      </style>
    </div>
  );
}
