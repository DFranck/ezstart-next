import { useState } from 'react';

const Sandbox = ({
  Component,
  defaultProps,
  propTypes,
}: {
  Component: React.ComponentType<any>;
  defaultProps: any;
  propTypes: any[];
}) => {
  const [props, setProps] = useState(defaultProps);

  const handleChange = (propName: string, value: any) => {
    setProps((prevProps: any) => ({ ...prevProps, [propName]: value }));
  };

  return (
    <div>
      <Component {...props} />
      <div className="mt-4">
        {propTypes.map((prop) => (
          <div key={prop.name} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {prop.name}
            </label>
            <input
              type="text"
              value={props[prop.name]}
              onChange={(e) => handleChange(prop.name, e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sandbox;
