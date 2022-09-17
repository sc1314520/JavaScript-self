
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class demo10 {
	public static void main(String[] args) {
		String[] arr = {"123","55","253","789"};
		String[] arr2 = {"45","78","111","55","253","45"};
		List<String> list1 =Arrays.asList(arr);
		List<String> list2 =Arrays.asList(arr2);
		System.out.println(Stream.concat(list1.stream(), list2.stream()).distinct()
				.sorted((a,b)->Integer.parseInt(a)-Integer.parseInt(b))
				.collect(Collectors.joining("<"))); 
		// 45<55<78<111<123<253<789
	}
}