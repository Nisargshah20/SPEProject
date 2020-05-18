package com.spe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spe.model.User;
import com.spe.repository.UserRepository;
import com.spe.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    @Override
    public User findUserByUsername(String username){
    	return userRepository.findByUsername(username);
    }

    @Override
    public void saveUser(User user) {

        userRepository.save(user);
    }

}