# `users`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int unsigned | NO | PRI | NULL | auto_increment |  |
| name | varchar(255) | NO |  | NULL |  |  |
| email | varchar(255) | NO | UNI | NULL |  |  |
| email_verified_at | datetime | YES |  | NULL |  |  |
| password | varchar(255) | NO |  | NULL |  |  |
| remember_token | varchar(100) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| status | varchar(255) | YES |  | NULL |  |  |
| PERSON_ID | varchar(10) | YES |  | NULL |  |  |
| username | varchar(255) | YES |  | NULL |  |  |
| deleted_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| users_email_unique | email | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "name": "[MASKED_FULLNAME]",
    "email": "admin@gtw.com",
    "email_verified_at": "1900-01-01 00:00:00",
    "password": "$2y$10$VTTiBdB/BgTn59CejOedKeJu.h4BRRjNp/HvDOk9SLkZUL8nWynSa",
    "remember_token": "JZwjALI5kQP8YUAIpVvlWkebTYz3FA7DBICTv8O2ypz3ly2QJrZfzWYmo5tB",
    "created_at": "2019-02-27 15:43:17",
    "updated_at": "2021-06-08 04:01:57",
    "status": "ADMIN",
    "PERSON_ID": "0",
    "username": "admin",
    "deleted_at": null
  },
  {
    "id": 2,
    "name": "[MASKED_FULLNAME]",
    "email": "ycap001@gtw.com",
    "email_verified_at": "1900-01-01 00:00:00",
    "password": "$2y$10$VTTiBdB/BgTn59CejOedKeJu.h4BRRjNp/HvDOk9SLkZUL8nWynSa",
    "remember_token": "8rNSU1uJ1jNn57VW95ZW9O2HppW6F5H9usjVezuWU5eLlpZsbcuKYcIbBJco",
    "created_at": "2019-03-05 13:42:11",
    "updated_at": "2021-11-25 08:06:08",
    "status": "NOTUSER",
    "PERSON_ID": "1",
    "username": "ycap001",
    "deleted_at": null
  },
  {
    "id": 3,
    "name": "[MASKED_FULLNAME]",
    "email": "ycap002@gtw.com",
    "email_verified_at": "1900-01-01 00:00:00",
    "password": "$2y$10$VTTiBdB/BgTn59CejOedKeJu.h4BRRjNp/HvDOk9SLkZUL8nWynSa",
    "remember_token": "ECc0c6g40USR2LvqjEGNCj4eOiRAmTUAsPCvb2KBievW929IPqtSStnqx5iu",
    "created_at": "2019-03-05 13:42:11",
    "updated_at": "2020-01-08 12:38:54",
    "status": "USER",
    "PERSON_ID": "2",
    "username": "ycap002",
    "deleted_at": null
  },
  {
    "id": 4,
    "name": "[MASKED_FULLNAME]",
    "email": "ycap003@gtw.com",
    "email_verified_at": "1900-01-01 00:00:00",
    "password": "$2y$10$VTTiBdB/BgTn59CejOedKeJu.h4BRRjNp/HvDOk9SLkZUL8nWynSa",
    "remember_token": "zsYavIWRfK5jJMvaQxlpJqSfAhjVVxaXgtUiH74GBKfLyabygt1FRXnsTbZI",
    "created_at": "2019-03-05 13:42:11",
    "updated_at": "2021-06-08 04:01:57",
    "status": "USER",
    "PERSON_ID": "3",
    "username": "ycap003",
    "deleted_at": null
  },
  {
    "id": 5,
    "name": "[MASKED_FULLNAME]",
    "email": "ycap004@gtw.com",
    "email_verified_at": "1900-01-01 00:00:00",
    "password": "$2y$10$VTTiBdB/BgTn59CejOedKeJu.h4BRRjNp/HvDOk9SLkZUL8nWynSa",
    "remember_token": "r6bAfeYzfQ1SHKlGbfwQ43aI6e5h37srTfwyC7toRFaDHUSaWgDgAkrRZXqF",
    "created_at": "2019-03-05 13:42:11",
    "updated_at": "2021-06-08 04:01:57",
    "status": "USER",
    "PERSON_ID": "4",
    "username": "ycap004",
    "deleted_at": null
  },
  {
    "id": 6,
    "name": "[MASKED_FULLNAME]",
    "email": "ycap005@gtw.com",
    "email_verified_at": "1900-01-01 00:00:00",
    "password": "$2y$10$VTTiBdB/BgTn59CejOedKeJu.h4BRRjNp/HvDOk9SLkZUL8nWynSa",
    "remember_token": "7olbnNj6Qm75Ue2NOHDCdhQQqZUd1fPItdHFrioctgxUKsInjkVFVR9Yt6gY",
    "created_at": "2019-03-05 13:42:11",
    "updated_at": "2025-09-19 04:00:39",
    "status": "USER",
    "PERSON_ID": "5",
    "username": "ycap005",
    "deleted_at": null
  },
  {
    "id": 7,
    "name": "[MASKED_FULLNAME]",
    "email": "ycap006@gtw.com",
    "email_verified_at": "1900-01-01 00:00:00",
    "password": "$2y$10$VTTiBdB/BgTn59CejOedKeJu.h4BRRjNp/HvDOk9SLkZUL8nWynSa",
    "remember_token": "wQP9ykXq1IUTzUcbbWmUAEfYwW7bhjSlCfKQkKiTzr6ARrCVkZz5wNhrhQ0S",
    "created_at": "2019-03-05 13:42:11",
    "updated_at": "2021-11-25 08:06:38",
    "status": "NOTUSER",
    "PERSON_ID": "6",
    "username": "ycap006",
    "deleted_at": null
  },
  {
    "id": 8,
    "name": "[MASKED_FULLNAME]",
    "email": "ycap007@gtw.com",
    "email_verified_at": "1900-01-01 00:00:00",
    "password": "$2y$10$VTTiBdB/BgTn59CejOedKeJu.h4BRRjNp/HvDOk9SLkZUL8nWynSa",
    "remember_token": "wQP9ykXq1IUTzUcbbWmUAEfYwW7bhjSlCfKQkKiTzr6ARrCVkZz5wNhrhQ0S",
    "created_at": "2019-03-05 13:42:11",
    "updated_at": "2021-06-08 04:01:57",
    "status": "NOTUSER",
    "PERSON_ID": "7",
    "username": "ycap007",
    "deleted_at": null
  }
]
```
