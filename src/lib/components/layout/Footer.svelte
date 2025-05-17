<script lang="ts">
  import { Linkedin, Mail, MapPin } from "lucide-svelte";
</script>

<footer class="bg-neutral text-base-100 py-8">
  <div class="container-custom">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-semibold mb-4">Khalid Abdul Jabbar</h3>
        <p class="mb-4">
          Senior QA Engineer | Test Architect | Lead QA Engineer
        </p>
        <div class="flex items-center mb-2">
          <MapPin size={16} class="mr-2" />
          <span>South Tangerang, Indonesia</span>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4">Connect With Me</h3>
        <div class="flex flex-col space-y-2">
          <a
            href="mailto:khldabduljabbar@gmail.com"
            class="flex items-center hover:text-primary transition-colors"
            rel="noopener noreferrer"
          >
            <Mail size={16} class="mr-2" />
            <span>khldabduljabbar@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/khld"
            target="_blank"
            class="flex items-center hover:text-primary transition-colors"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} class="mr-2" />
            <span>linkedin.com/in/khld</span>
          </a>
          <!-- <a 
						href="tel:+6287778198194" 
						class="flex items-center hover:text-primary transition-colors"
						rel="noopener noreferrer"
					>
						<span>+62 877-7819-8194</span>
					</a> -->
        </div>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-6 pt-6 text-sm text-center">
      <p>
        © {new Date().getFullYear()} Khalid Abdul Jabbar. All rights reserved.
      </p>
    </div>
  </div>
</footer>
