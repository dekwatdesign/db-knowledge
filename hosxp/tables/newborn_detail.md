# `newborn_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rec_no | int(11) | NO | PRI | 0 |  |  |
| refer_no | varchar(20) | NO | PRI |  |  |  |
| ddate | datetime | YES |  | NULL |  |  |
| dtime | varchar(5) | YES |  | NULL |  |  |
| meet_id | int(11) | YES |  | NULL |  |  |
| t | decimal(11,2) | YES |  | NULL |  |  |
| p | int(11) | YES |  | NULL |  |  |
| r | int(11) | YES |  | NULL |  |  |
| bp | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rec_no | yes | 1 |
| PRIMARY | refer_no | yes | 2 |
| refer_no | refer_no | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
