# `work_accounts_sessions`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| gtw_user_id | int | YES |  | NULL |  |  |
| session_key | varchar(255) | YES |  | NULL |  |  |
| session_expire_datetime | datetime | YES |  | NULL |  |  |
| remember_key | varchar(255) | YES |  | NULL |  |  |
| remember_expire_datetime | datetime | YES |  | NULL |  |  |
| ip_address | varchar(255) | YES |  | NULL |  |  |
| user_agent | varchar(255) | YES |  | NULL |  |  |
| server_name | varchar(255) | YES |  | NULL |  |  |
| server_addr | varchar(255) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL | on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "gtw_user_id": 253,
    "session_key": "025c01fbdfac08c336393f52765cca6faf36c9d9d6f6768fb488d21d8a85b358",
    "session_expire_datetime": "2025-12-26 07:27:40",
    "remember_key": "qAJxP/GjHNQZL+c3cZKUKKDqtE6sYXJ22GTTJy1aAIOGU6zLysG+UAWPQ26iPzYuBj6omyjIIcZCnRD/GF30wA==",
    "remember_expire_datetime": "2025-03-26 07:27:40",
    "ip_address": "::1",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "server_name": "localhost",
    "server_addr": "::1",
    "created_at": null
  },
  {
    "id": 2,
    "gtw_user_id": 253,
    "session_key": "b04f8bcf261805746e11bce001fd4e85d0692a950b59adfbaee89269acdc3ef4",
    "session_expire_datetime": "2025-12-26 07:51:53",
    "remember_key": "guA0rdnrugd6aWz2sDPl4MROE0wMRtol4aY6kamezyKrIsnHU5UE/OxNy0h9VY64EiDK8d3JBgcDw0MnJp3txw==",
    "remember_expire_datetime": "2025-03-26 07:51:53",
    "ip_address": "::1",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "server_name": "localhost",
    "server_addr": "::1",
    "created_at": null
  },
  {
    "id": 3,
    "gtw_user_id": 253,
    "session_key": "b8f06b41670c4c11582cce028d24351415bf4806e00c505ec9457b2469ba99f7",
    "session_expire_datetime": "2025-12-26 08:07:55",
    "remember_key": "aDYaoi8pxzhQAqmdwj1EfhoILnp33uY1+hVsp3dIiOaP3V/Be0p89UPD/9EubuOoBLw+CjAXkP7NihYv4Y3qgQ==",
    "remember_expire_datetime": "2025-03-26 08:07:55",
    "ip_address": "::1",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "server_name": "localhost",
    "server_addr": "::1",
    "created_at": null
  },
  {
    "id": 4,
    "gtw_user_id": 253,
    "session_key": "ab5314660d7ed084215667fe762c66527f28988cf2fd7e0804799e7e7f4335d9",
    "session_expire_datetime": "2025-12-27 01:43:09",
    "remember_key": "KvS4GKTKwV3R9dBnSMk4S6kd4qQy5ZWMOOXzHxq4tZQeo2Zl7w3WM6UFSd8WE8Q5OzdLxS4VvyF3tkZZZxgZBg==",
    "remember_expire_datetime": "2025-03-27 01:43:09",
    "ip_address": "::1",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "server_name": "localhost",
    "server_addr": "::1",
    "created_at": null
  },
  {
    "id": 5,
    "gtw_user_id": 253,
    "session_key": "3c1691456b9e3f429f57781a36198633877ca3b7790b3a5ccb44e72df61281ea",
    "session_expire_datetime": "2025-12-27 01:47:17",
    "remember_key": "G+Dcpguuo2lw6VS8b30ewr279SQ9frFUpxtA+vm5JY6E15VLTcoOZoTqUcnDWoEkdZRiq02RNm0Kjum2C1157g==",
    "remember_expire_datetime": "2025-03-27 01:47:17",
    "ip_address": "::1",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "server_name": "localhost",
    "server_addr": "::1",
    "created_at": null
  },
  {
    "id": 6,
    "gtw_user_id": 253,
    "session_key": "12629eb7b41b8ba30e86c906f722075569ba21632c78259be8b796874cc28b35",
    "session_expire_datetime": "2025-12-27 03:12:42",
    "remember_key": "HP/I5PsPIUmImvkSZmZWeBDKVvfdgb6YWiUHusz2SVgj0qaudMyryr5jaHktk47Zvr4AZ0krOT9HfqH2kLoNxg==",
    "remember_expire_datetime": "2025-03-27 03:12:42",
    "ip_address": "::1",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "server_name": "localhost",
    "server_addr": "::1",
    "created_at": null
  },
  {
    "id": 7,
    "gtw_user_id": 253,
    "session_key": "b9e1e79eb08238bed5fb8d2f48f75b8ba8bd136c0fa08ad50e1dfc7c2d60582c",
    "session_expire_datetime": "2025-12-27 06:46:17",
    "remember_key": "Fn/0KjR6SKCx3cjt+2msjrDKKUlo2s31xU9mHG8dxEEHB7jsfh0AtYF0kjXBAvIVQhOBfqe3/3QC9iOs17tU6g==",
    "remember_expire_datetime": "2025-03-27 06:46:17",
    "ip_address": "::1",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "server_name": "localhost",
    "server_addr": "::1",
    "created_at": null
  },
  {
    "id": 8,
    "gtw_user_id": 222,
    "session_key": "e0e50f7ec705465330d8006ea8809c912886ee5c12698fe993b7de82f002e20e",
    "session_expire_datetime": "2025-12-27 06:46:34",
    "remember_key": "KsFbl1sT3nbZy5JSou/fNE3o9NszhQ8sx40ny/aiJ5wLOLyGAPuDNHm8dwZxhhRrnu9wtKbWjxq8ZAOqXn7evQ==",
    "remember_expire_datetime": "2025-03-27 06:46:34",
    "ip_address": "::1",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "server_name": "localhost",
    "server_addr": "::1",
    "created_at": null
  }
]
```
