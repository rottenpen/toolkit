import { IBasePackageInfo } from '../../types';
import getLocalNodeInfo from './node';
import getLocalCliInfo from './cli';

const processor = {
  node: getLocalNodeInfo,
};

export default async (basePackageInfo: IBasePackageInfo) => {
  const { name, version, options } = basePackageInfo;
  const getLocalInfoFunc = processor[name];

  return getLocalInfoFunc ? await getLocalInfoFunc(name, version, options) : await getLocalCliInfo(name, version);
};
