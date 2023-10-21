const isLocalDev = process.env.NODE_ENV === 'development';

const BASE_URL = isLocalDev ? 
'http://localhost:3002' : 
'http://null-para-frontend-nullpara.apps.cluster-rtxk9.gcp.redhatworkshops.io:3002';

export default BASE_URL;