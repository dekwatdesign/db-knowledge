# `information_facebook_page`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| IFP_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| IFP_PLUGIN | varchar(400) | NO |  | NULL |  |  |
| IFP_DATASHOW | varchar(1000) | NO |  | NULL |  |  |
| IFP_ACTIVE | tinyint(1) | NO |  | 0 |  |  |
| created_at | timestamp | YES |  | NULL |  |  |
| updated_at | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | IFP_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
