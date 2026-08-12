/**
 * STEP 32: InstanceType Utility Type
 */
class HttpService {
  request(url: string) {
    return `Fetching data from ${url}`;
  }
}

type HttpServiceInstance = InstanceType<typeof HttpService>;
const clientService: HttpServiceInstance = new HttpService();
console.log("Step 32: InstanceType verified:", clientService.request("https://api.github.com"));
