# `finance_pay_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| finance_pay_type_id | int(11) | NO | PRI | 0 |  |  |
| finance_pay_type_name | varchar(100) | YES | UNI | NULL |  |  |
| is_credit_card | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_pay_type_name | finance_pay_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | finance_pay_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "finance_pay_type_id": 1,
    "finance_pay_type_name": "เงินสด",
    "is_credit_card": null,
    "hos_guid": null
  },
  {
    "finance_pay_type_id": 2,
    "finance_pay_type_name": "บัตรเครดิต",
    "is_credit_card": "Y",
    "hos_guid": null
  },
  {
    "finance_pay_type_id": 3,
    "finance_pay_type_name": "คูปอง",
    "is_credit_card": null,
    "hos_guid": null
  }
]
```
