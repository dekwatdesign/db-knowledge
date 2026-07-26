# `kskbackuprule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| mainfield | varchar(100) | YES |  | NULL |  |  |
| maxsql | varchar(250) | YES |  | NULL |  |  |
| minsql | varchar(250) | YES |  | NULL |  |  |
| tablename | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "mainfield": "LOGTIME",
    "maxsql": "select rtrim(max(convert(char(20),logtime,120))) as maxscope from ksklog",
    "minsql": "select rtrim(min(convert(char(20),logtime,120))) as minscope from ksklog",
    "tablename": "KSKLOG",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
