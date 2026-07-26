# `kskdocument`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| confirmreceive | varchar(250) | YES |  | NULL |  |  |
| docno | varchar(150) | YES |  | NULL |  |  |
| maindepcode | char(3) | YES | MUL | NULL |  |  |
| pagecount | int(11) | YES |  | NULL |  |  |
| receivefrom | varchar(150) | YES |  | NULL |  |  |
| refno | varchar(150) | YES |  | NULL |  |  |
| sendcopy | varchar(250) | YES |  | NULL |  |  |
| senddate | datetime | YES | MUL | NULL |  |  |
| sendtodep | varchar(250) | YES | MUL | NULL |  |  |
| sender | varchar(250) | YES | MUL | NULL |  |  |
| storelocation | varchar(150) | YES |  | NULL |  |  |
| subject | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| maindepcode | maindepcode | no | 1 |
| senddate | senddate | no | 1 |
| sender | sender | no | 1 |
| sendtodep | sendtodep | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
