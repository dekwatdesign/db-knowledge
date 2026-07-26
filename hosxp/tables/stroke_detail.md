# `stroke_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rec_no | int(11) | NO | PRI | 0 |  |  |
| refer_no | varchar(20) | NO | PRI |  |  |  |
| ddate | datetime | YES |  | NULL |  |  |
| dtime | varchar(5) | YES |  | NULL |  |  |
| conscious | int(11) | YES |  | NULL |  |  |
| e | int(11) | YES |  | NULL |  |  |
| v | int(11) | YES |  | NULL |  |  |
| m | int(11) | YES |  | NULL |  |  |
| evm_total | int(11) | YES |  | NULL |  |  |
| pupil_right | int(11) | YES |  | NULL |  |  |
| pupil_left | int(11) | YES |  | NULL |  |  |
| t | decimal(11,2) | YES |  | NULL |  |  |
| p | int(11) | YES |  | NULL |  |  |
| r | int(11) | YES |  | NULL |  |  |
| bp | varchar(20) | YES |  | NULL |  |  |

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
