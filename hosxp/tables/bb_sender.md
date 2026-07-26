# `bb_sender`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| senderid | int(11) | NO | PRI | 0 |  |  |
| bloodid | int(11) | YES |  | NULL |  |  |
| code | text | YES |  | NULL |  |  |
| sendertypeid | int(11) | YES |  | NULL |  |  |
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
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | senderid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
