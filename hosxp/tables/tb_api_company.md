# `tb_api_company`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CompanyId | varchar(15) | NO | PRI |  |  |  |
| CompanyName | varchar(255) | YES |  | NULL |  |  |
| CompanyModul | varchar(50) | NO | PRI |  |  |  |
| CompanyStatus | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CompanyId | yes | 1 |
| PRIMARY | CompanyModul | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "CompanyId": "XIRefAdSzMhGn",
    "CompanyName": "PjHIS",
    "CompanyModul": "ApiAll",
    "CompanyStatus": "Y"
  }
]
```
