# `supplies_soldout`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SOLDOUT_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| SOLDOUT_NO | varchar(100) | YES |  | NULL |  |  |
| SOLDOUT_YEAR | varchar(11) | YES |  | NULL |  |  |
| SOLDOUT_DATE | datetime | YES |  | NULL |  |  |
| SOLDOUT_ARTICLE_ID | varchar(11) | YES |  | NULL |  |  |
| SOLDOUT_DETAIL | varchar(255) | YES |  | NULL |  |  |
| SOLDOUT_WIN | varchar(255) | YES |  | NULL |  |  |
| SOLDOUT_PRICE | double(8,2) | YES |  | NULL |  |  |
| SOLDOUT_COMMENT | varchar(255) | YES |  | NULL |  |  |
| SOLDOUT_STATUS | varchar(11) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SOLDOUT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
