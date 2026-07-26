# `password_resets`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| email | varchar(255) | NO | MUL | NULL |  |  |
| token | varchar(255) | NO |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| password_resets_email_index | email | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "email": "jitsanga@gmail.com",
    "token": "$2y$10$2ue8IBfcTSwyj4lPB6JPPeIoVuniFo39FXNfsUO1tOToFOdD8FL6i",
    "created_at": "2019-05-17 11:17:46"
  },
  {
    "email": "decha015@gmail.com",
    "token": "$2y$10$hv9dbK8v8vOMN7c.i8KXSuPYHWAe2Q5IV3lWYkgI8hez6rjDEPdm2",
    "created_at": "2019-06-18 06:31:01"
  },
  {
    "email": "dekbanbanproject@gmail.com",
    "token": "$2y$10$BKAXuyrdHxx6KrsZ.JwoAOXTCdWP4qzrE2.MW1xaTHlWfbvdzNcra",
    "created_at": "2019-09-25 03:01:21"
  }
]
```
