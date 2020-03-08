package com.social.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;

@Entity
@Table(name="create_poll")
@Scope("session")
public class CreatePoll {

	@Id
	private Long pollId;
	
	private String pollTitle;
	
	private String pollOption1;

    private String pollOption2;

	private String pollOption3;
	
	private String pollOption4;
	
	public Long getPollId() {
		return pollId;
	}

	public void setPollId(Long pollId) {
		this.pollId = pollId;
	}

	public String getPollTitle() {
		return pollTitle;
	}


	public void setPollTitle(String pollTitle) {
		this.pollTitle = pollTitle;
	}


	public String getPollOption1() {
		return pollOption1;
	}


	public void setPollOption1(String pollOption1) {
		this.pollOption1 = pollOption1;
	}


	public String pollOption2() {
		return pollOption2;
	}


	public void setPollOption2(String pollOption2) {
		this.pollOption2 = pollOption2;
	}


	public String getPollOption3() {
		return pollOption3;
	}


	public void setPollOption3(String pollOption3) {
		this.pollOption3 = pollOption3;
	}


	public String getPollOption4() {
		return pollOption4;
	}


	public void setPollOption4(String pollOption4) {
		this.pollOption4 = pollOption4;
	}
	
	
	public CreatePoll(Long pollId, String pollTitle, String pollOption1, String pollOption2, String pollOption3, String pollOption4) {
		this.pollId = pollId;
		this.pollTitle = pollTitle;
		this.pollOption1 = pollOption1;
		this.pollOption2 = pollOption2;
		this.pollOption3 = pollOption3;
		this.pollOption4 = pollOption4;
	}

	public CreatePoll() {
		
	}

	@Override
	public String toString() {
		return "CreatePoll [pollId=" + pollId + ", pollTitle=" + pollTitle + ", pollOption1=" + pollOption1 + ", pollOption2="
				+ pollOption2 + ", pollOption3=" + pollOption3 + ", pollOption4=" + pollOption4 + "]";
	}
	
	

}
