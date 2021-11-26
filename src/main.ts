import { validate } from './common.types.validator';

type Validator<TValue> = (value: unknown) => TValue;

const safetyLog = <TValue>(
  msg: string,
  validator: Validator<TValue>,
  rawValue: unknown,
) => {
  try {
    const parsedValue = validator(rawValue);
    console.log(`✅ ${msg}`, JSON.stringify(parsedValue, null, 2));
  } catch (error: any) {
    console.error('❌ Failed to parse', JSON.stringify(rawValue, null, 2));
    console.error(error.message);
  }
};

safetyLog('Product => invalid', validate('Product'), {
  id: 1,
  name: 'Table 1',
  type: 'Invalid type',
  quantity: 5,
});

safetyLog('Product => valid', validate('Product'), {
  id: 1,
  name: 'Table 2',
  type: 'FURNITURE',
  quantity: 10,
});

safetyLog('FastType => boolean', validate('FastType'), false);
safetyLog('FastType => string', validate('FastType'), 'Fast Type');
safetyLog('FastType => number', validate('FastType'), 100);
