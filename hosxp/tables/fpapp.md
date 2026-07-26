# `fpapp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| appdate | datetime | YES | MUL | NULL |  |  |
| appresult | char(2) | YES |  | NULL |  |  |
| fp | varchar(6) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | datetime | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| appdate | appdate | no | 1 |
| fp | fp | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
