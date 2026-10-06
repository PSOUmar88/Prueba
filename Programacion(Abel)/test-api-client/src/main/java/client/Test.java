package client;
 
import java.util.List;
 
public class Test {
 
	public static void main(String[] args) throws CochesNotFoundException {
		
		ApiClient apiClient = new ApiClient("https://ca4903f40dbefe1ba620.free.beeceptor.com/api/coches");
		
		Coche coche;
		try {
			System.out.println(">>>>>>>>>> Test un coche: ");
			
			coche = apiClient.getCocheById("bcb29f78e6dc8ae40e38");
			
			System.out.println(coche);
			
			System.out.println(">>>>>>>>>> Test todos los coches: ");
			
			List<Coche> coches = apiClient.getCochesAll();
			
			coches.forEach(System.out::println);
			
			System.out.println(">>>>>>>>>> Test crear coche: ");
			
			Coche nuevo = new Coche();
			
			nuevo.setColor("amarillo");
			
			nuevo.setMarca("tesla");
			
			nuevo.setModelo("blas");
			
			nuevo.setMatricula("7892BMD");
			
			Coche creado = apiClient.crearCoche(nuevo);
			
			System.out.println(creado);
			
		} catch (CochesApiException e) {
			
			e.printStackTrace();
			
		}
		
	}
	
	
}
