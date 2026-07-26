# `inj_demo`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| fname | varchar(15) | YES |  | NULL |  |  |
| lname | varchar(15) | YES |  | NULL |  |  |
| pname | varchar(10) | YES |  | NULL |  |  |
| gender | char(1) | YES |  | NULL |  |  |
| race | char(1) | YES |  | NULL |  |  |
| dob | date | YES |  | NULL |  |  |
| age | int(5) | YES |  | NULL |  |  |
| address | varchar(20) | YES |  | NULL |  |  |
| occup | varchar(25) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
