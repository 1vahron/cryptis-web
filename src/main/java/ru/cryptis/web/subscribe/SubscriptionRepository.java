package ru.cryptis.web.subscribe;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SubscriptionRepository extends CrudRepository<Subscription, String> {
    List<Subscription> findAll();
}
