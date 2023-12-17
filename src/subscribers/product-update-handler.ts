import { 
    ProductService,
    type SubscriberConfig, 
    type SubscriberArgs, 
  } from "@medusajs/medusa"
  
  export default async function productUpdateHandler({ 
    data, eventName, container, pluginOptions, 
  }: SubscriberArgs<Record<string, any>>) {
    const productService: ProductService = container.resolve(
      "productService"
    )
  
    const { id } = data
  
    const product = await productService.retrieve(id)
    console.log("product productUpdateHandler from backend-marketplace/src/subscribers ",{product})
    // do something with the product...
  }
  
  export const config: SubscriberConfig = {
    event: ProductService.Events.UPDATED,
    context: {
      subscriberId: "product-update-handler",
    },
  }

//   export default async function productUpdateHandler({ 
//     data, eventName, container, pluginOptions, 
//   }: SubscriberArgs) {
//     const configModule: ConfigModule = container.resolve(
//       "configModule"
//     )
    
//     // ...
//   }
  
//   export const config: SubscriberConfig = {
//     event: ProductService.Events.UPDATED,
//     context: {
//       subscriberId: "product-update-handler",
//     },
//   }  