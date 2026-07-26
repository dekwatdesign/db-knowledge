# `lansaka_risk_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id_print | varchar(50) | NO | PRI |  |  |  |
| print_report_name | varchar(200) | YES |  | NULL |  |  |
| url | varchar(200) | YES |  | NULL |  |  |
| status_print | char(1) | YES |  | NULL |  |  |
| risk_id | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id_print | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id_print": "4",
    "print_report_name": "CUSTOM-lansaka_risk_form",
    "url": "/Files/report/c4ca4238a0b923820dcc509a6f75849b.pdf",
    "status_print": "Y",
    "risk_id": "000001"
  }
]
```
