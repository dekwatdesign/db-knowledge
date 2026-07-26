# `asset_depreciate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| DEP_ID | int | NO | PRI | NULL | auto_increment |  |
| DEP_ASSET_ID | int | YES |  | NULL |  |  |
| DEP_YEAR | varchar(255) | YES |  | NULL |  |  |
| DEP_MONTH | varchar(255) | YES |  | NULL |  |  |
| DEP_PRICE | varchar(65) | YES |  | NULL |  |  |
| DEP_FORWARD | varchar(65) | YES |  | NULL |  |  |
| DEP_DEPRECIATE | varchar(65) | YES |  | NULL |  |  |
| DEP_CUMULATIVE | varchar(65) | YES |  | NULL |  |  |
| DEP_VALUE | varchar(65) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | DEP_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "DEP_ID": 544,
    "DEP_ASSET_ID": 8,
    "DEP_YEAR": "2554",
    "DEP_MONTH": "11",
    "DEP_PRICE": "117267.00",
    "DEP_FORWARD": "0",
    "DEP_DEPRECIATE": "3148.5212275",
    "DEP_CUMULATIVE": "3148.5212275",
    "DEP_VALUE": "114118.4787725",
    "updated_at": "2020-09-23 15:26:51",
    "created_at": "2020-09-23 15:26:51"
  },
  {
    "DEP_ID": 545,
    "DEP_ASSET_ID": 8,
    "DEP_YEAR": "2554",
    "DEP_MONTH": "12",
    "DEP_PRICE": "117267.00",
    "DEP_FORWARD": "3148.5212275",
    "DEP_DEPRECIATE": "3257.090925",
    "DEP_CUMULATIVE": "6405.6121525",
    "DEP_VALUE": "110861.3878475",
    "updated_at": "2020-09-23 15:26:51",
    "created_at": "2020-09-23 15:26:51"
  },
  {
    "DEP_ID": 546,
    "DEP_ASSET_ID": 8,
    "DEP_YEAR": "2555",
    "DEP_MONTH": "1",
    "DEP_PRICE": "117267.00",
    "DEP_FORWARD": "6405.6121525",
    "DEP_DEPRECIATE": "3257.090925",
    "DEP_CUMULATIVE": "9662.7030775",
    "DEP_VALUE": "107604.2969225",
    "updated_at": "2020-09-23 15:26:51",
    "created_at": "2020-09-23 15:26:51"
  },
  {
    "DEP_ID": 547,
    "DEP_ASSET_ID": 8,
    "DEP_YEAR": "2555",
    "DEP_MONTH": "2",
    "DEP_PRICE": "117267.00",
    "DEP_FORWARD": "9662.7030775",
    "DEP_DEPRECIATE": "3257.090925",
    "DEP_CUMULATIVE": "12919.7940025",
    "DEP_VALUE": "104347.2059975",
    "updated_at": "2020-09-23 15:26:51",
    "created_at": "2020-09-23 15:26:51"
  },
  {
    "DEP_ID": 548,
    "DEP_ASSET_ID": 8,
    "DEP_YEAR": "2555",
    "DEP_MONTH": "3",
    "DEP_PRICE": "117267.00",
    "DEP_FORWARD": "12919.7940025",
    "DEP_DEPRECIATE": "3257.090925",
    "DEP_CUMULATIVE": "16176.884927500001",
    "DEP_VALUE": "101090.1150725",
    "updated_at": "2020-09-23 15:26:51",
    "created_at": "2020-09-23 15:26:51"
  },
  {
    "DEP_ID": 549,
    "DEP_ASSET_ID": 8,
    "DEP_YEAR": "2555",
    "DEP_MONTH": "4",
    "DEP_PRICE": "117267.00",
    "DEP_FORWARD": "16176.8849275",
    "DEP_DEPRECIATE": "3257.090925",
    "DEP_CUMULATIVE": "19433.9758525",
    "DEP_VALUE": "97833.0241475",
    "updated_at": "2020-09-23 15:26:51",
    "created_at": "2020-09-23 15:26:51"
  },
  {
    "DEP_ID": 550,
    "DEP_ASSET_ID": 8,
    "DEP_YEAR": "2555",
    "DEP_MONTH": "5",
    "DEP_PRICE": "117267.00",
    "DEP_FORWARD": "19433.9758525",
    "DEP_DEPRECIATE": "3257.090925",
    "DEP_CUMULATIVE": "22691.0667775",
    "DEP_VALUE": "94575.9332225",
    "updated_at": "2020-09-23 15:26:51",
    "created_at": "2020-09-23 15:26:51"
  },
  {
    "DEP_ID": 551,
    "DEP_ASSET_ID": 8,
    "DEP_YEAR": "2555",
    "DEP_MONTH": "6",
    "DEP_PRICE": "117267.00",
    "DEP_FORWARD": "22691.0667775",
    "DEP_DEPRECIATE": "3257.090925",
    "DEP_CUMULATIVE": "25948.1577025",
    "DEP_VALUE": "91318.8422975",
    "updated_at": "2020-09-23 15:26:51",
    "created_at": "2020-09-23 15:26:51"
  }
]
```
