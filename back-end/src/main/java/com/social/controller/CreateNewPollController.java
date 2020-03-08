package com.social.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.social.dao.CreatePollRepository;
import com.social.entities.CreatePoll;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/account")
public class CreateNewPollController {

	
	@Autowired
	CreatePollRepository createPollRepositiry;
	
	@CrossOrigin
	@PostMapping(value="/createpoll")
	public CreatePoll createNewPoll(@RequestBody CreatePoll createPoll) {
		System.out.println("poll title"+createPoll.getPollTitle());
		return createPollRepositiry.save(createPoll);
	}

}
