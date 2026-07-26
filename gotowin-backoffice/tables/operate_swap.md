# `operate_swap`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPSWAP_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| OPSWAP_DEP | varchar(255) | YES |  | NULL |  |  |
| OPSWAP_DEP_NAME | varchar(255) | YES |  | NULL |  |  |
| OPSWAP_PERSON_1 | varchar(255) | YES |  | NULL |  |  |
| OPSWAP_PERSON_1_NAME | varchar(255) | YES |  | NULL |  |  |
| OPSWAP_PERSON_2 | varchar(255) | YES |  | NULL |  |  |
| OPSWAP_PERSON_2_NAME | varchar(255) | YES |  | NULL |  |  |
| OPSWAP_DATE_1 | date | YES |  | NULL |  |  |
| OPSWAP_JOB_1 | varchar(255) | YES |  | NULL |  |  |
| OPSWAP_REMARK | varchar(500) | YES |  | NULL |  |  |
| OPSWAP_DATE_2 | date | YES |  | NULL |  |  |
| OPSWAP_JOB_2 | varchar(500) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OPSWAP_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
