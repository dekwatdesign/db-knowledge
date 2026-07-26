# `asset_borrow_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| BR_ID | varchar(11) | YES |  |  |  |  |
| ARTICLE_ID | int | YES |  | NULL |  |  |
| ARTICLE_NUM | varchar(50) | YES |  |  |  |  |
| ARTICLE_NAME | varchar(150) | YES |  |  |  |  |
| ARTICLE_BRAND | varchar(50) | YES |  |  |  |  |
| ARTICLE_MODEL | varchar(255) | YES |  |  |  |  |
| ARTICLE_TOTAL | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
