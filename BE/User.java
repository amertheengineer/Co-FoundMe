import java.util.*;
import java.text.SimpleDateFormat;


public class User {
	
	String firstName, lastName, DOB;
	int id, Gender, age, matchNumber, min_age, max_age, distance_filter;
	String [] hobbies;
	String location;
	
	public User(String first, String last, String DOB, int age, int Gender)
	{
		this.firstName = first;
		this.lastName = last;
		this.DOB = DOB;
		this.age = age;
		this.Gender = Gender;
	}
	public String getName()
	{
		return this.firstName + this.lastName;
	}
	public Date getDateOfBirth()
	{
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date   dateOfBirth = format.parse (this.DOB );
		return dateOfBirth;
	}
	public boolean match(User user1, User user2)
	{
		int Score = 0;
		if(user1.location == user2.location)
		{
			if(user1.Gender != user2.Gender)
			{
				
			
				for(int i = 0; i < this.hobbies.length; i++)
				{
					for(int j = 0; j < this.hobbies.length; j++ )
					{
						if(user1.hobbies[i] == user2.hobbies[j])
						{
							Score++;
						}
					}
					
					
				}
			}
						
			
		}
		if(Score > 10)
		{
					return true;
		}
		return false;
				
	}
	public static void main(String[] args) {
		

	}

}
