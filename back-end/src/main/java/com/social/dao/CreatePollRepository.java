package com.social.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.social.entities.CreatePoll;

@Repository
public interface CreatePollRepository extends JpaRepository<CreatePoll, Long>{
	
//@Modifying
//@Query(value="insert into CreatePoll (pollId,pollTitle,option1,option2,option3,option4) values (:pollId, :pollTitle, :option1, :option2, :option3, :option4)", nativeQuery=true)
//void createNewPoll(@Param("pollId") Long pollId,@Param("pollTitle") String pollTitle,@Param("option1") String option1,@Param("option2") String option2,@Param("option3") String option3,@Param("option4") String option4);
}
