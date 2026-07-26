# `information_publicize`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| IPUB_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| IPUB_IMG | mediumblob | YES |  | NULL |  |  |
| IPUB_NAME | varchar(255) | NO |  | NULL |  |  |
| IPUB_DETAIL | varchar(400) | NO |  | NULL |  |  |
| IPUB_LINK | varchar(255) | NO |  | NULL |  |  |
| IPUB_DATE | date | NO |  | NULL |  |  |
| IPUB_TIME | time | NO |  | NULL |  |  |
| IPUB_ACTIVE | tinyint(1) | NO |  | 0 |  |  |
| created_at | timestamp | YES |  | NULL |  |  |
| updated_at | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | IPUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
