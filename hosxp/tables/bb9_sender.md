# `bb9_sender`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sender_id | int(11) | NO | PRI | 0 |  |  |
| bloodgroup_id | int(11) | YES | MUL | NULL |  |  |
| code | int(11) | YES | MUL | NULL |  |  |
| title | varchar(15) | YES |  | NULL |  |  |
| firstname | varchar(50) | YES |  | NULL |  |  |
| lastname | varchar(50) | YES |  | NULL |  |  |
| idcardnumber | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(13) | YES |  | NULL |  |  |
| telephone | varchar(20) | YES |  | NULL |  |  |
| occupation | varchar(20) | YES |  | NULL |  |  |
| age | int(11) | YES |  | NULL |  |  |
| weight | int(11) | YES |  | NULL |  |  |
| tourid | varchar(20) | YES |  | NULL |  |  |
| workerid | varchar(20) | YES |  | NULL |  |  |
| address | varchar(255) | YES |  | NULL |  |  |
| abo | varchar(20) | YES |  | NULL |  |  |
| rh | varchar(20) | YES |  | NULL |  |  |
| screening | varchar(20) | YES |  | NULL |  |  |
| precaution | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| bloodgroup_id | bloodgroup_id | no | 1 |
| code | code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | sender_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
