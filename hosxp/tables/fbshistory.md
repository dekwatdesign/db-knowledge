# `fbshistory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| fbslevel | double(15,3) | YES |  | NULL |  |  |
| fbs1mo | double(15,3) | YES |  | NULL |  |  |
| fbs2mo | double(15,3) | YES |  | NULL |  |  |
| fbs3mo | double(15,3) | YES |  | NULL |  |  |
| fbs4mo | double(15,3) | YES |  | NULL |  |  |
| fbs5mo | double(15,3) | YES |  | NULL |  |  |
| fbs6mo | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
