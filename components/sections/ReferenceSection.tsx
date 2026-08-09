export default function ReferenceSection() {
   return (
      <section>
         <div className="mb-8">
            <h3 className="text-lg font-medium">
               Check out these official resource
            </h3>
            <div className="mt-2 text-sm text-muted ">
               <ul>
                  <li className="hover:underline hover:text-primary duration-300">
                     <a href="https://docs.docker.com/reference/compose-file/" target="_blank">Docker Compose</a>
                  </li>
                  <li className="hover:underline hover:text-primary duration-300">
                     <a href="https://docs.spring.io/spring-boot/redirect.html?page=features#features.external-config" target="_blank">Spring Boot Config</a>
                  </li>
                  <li className="hover:underline hover:text-primary duration-300">
                     <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Properties.html" target="_blank">Java Properties</a>
                  </li>
                  <li className="hover:underline hover:text-primary duration-300">
                     <a href="https://www.json.org/json-en.html" target="_blank">JSON.org</a>
                  </li>
                  <li className="hover:underline hover:text-primary duration-300">
                     <a href="https://yaml.org/spec/1.2.2/" target="_blank">Yaml Specificaton</a>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
}