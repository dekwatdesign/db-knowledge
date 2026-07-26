# `blb_donation_center`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_donation_center_id | int(11) | NO | PRI | 0 |  |  |
| blb_donation_center_code | varchar(5) | YES |  | NULL |  |  |
| blb_donation_center_name | varchar(100) | YES |  | NULL |  |  |
| blb_donation_center_addr | varchar(50) | YES |  | NULL |  |  |
| blb_donation_center_tmb | char(2) | YES |  | NULL |  |  |
| blb_donation_center_amp | char(2) | YES |  | NULL |  |  |
| blb_donation_center_chw | char(2) | YES |  | NULL |  |  |
| blb_donation_center_national | char(3) | YES |  | NULL |  |  |
| blb_donation_center_email | varchar(50) | YES |  | NULL |  |  |
| blb_donation_center_phone | varchar(15) | YES |  | NULL |  |  |
| blb_donation_association_id | int(11) | YES | MUL | NULL |  |  |
| blb_donation_center_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_donation_association_id | blb_donation_association_id | no | 1 |
| ix_blb_donation_center_type_id | blb_donation_center_type_id | no | 1 |
| PRIMARY | blb_donation_center_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "blb_donation_center_id": 1,
    "blb_donation_center_code": "107",
    "blb_donation_center_name": "เหล่ากาชาดจังหวัดกระบี่",
    "blb_donation_center_addr": null,
    "blb_donation_center_tmb": null,
    "blb_donation_center_amp": null,
    "blb_donation_center_chw": null,
    "blb_donation_center_national": null,
    "blb_donation_center_email": null,
    "blb_donation_center_phone": null,
    "blb_donation_association_id": 1,
    "blb_donation_center_type_id": null
  },
  {
    "blb_donation_center_id": 2,
    "blb_donation_center_code": "146",
    "blb_donation_center_name": "โรงพยาบาลรามาธิบดี",
    "blb_donation_center_addr": null,
    "blb_donation_center_tmb": null,
    "blb_donation_center_amp": null,
    "blb_donation_center_chw": null,
    "blb_donation_center_national": null,
    "blb_donation_center_email": null,
    "blb_donation_center_phone": null,
    "blb_donation_association_id": 2,
    "blb_donation_center_type_id": null
  },
  {
    "blb_donation_center_id": 3,
    "blb_donation_center_code": "179",
    "blb_donation_center_name": "เหล่ากาชาดจังหวัดกาญจนบุรี",
    "blb_donation_center_addr": null,
    "blb_donation_center_tmb": null,
    "blb_donation_center_amp": null,
    "blb_donation_center_chw": null,
    "blb_donation_center_national": null,
    "blb_donation_center_email": null,
    "blb_donation_center_phone": null,
    "blb_donation_association_id": 3,
    "blb_donation_center_type_id": null
  },
  {
    "blb_donation_center_id": 4,
    "blb_donation_center_code": "185",
    "blb_donation_center_name": "โรงพยาบาลมะการักษ์",
    "blb_donation_center_addr": null,
    "blb_donation_center_tmb": null,
    "blb_donation_center_amp": null,
    "blb_donation_center_chw": null,
    "blb_donation_center_national": null,
    "blb_donation_center_email": null,
    "blb_donation_center_phone": null,
    "blb_donation_association_id": 4,
    "blb_donation_center_type_id": null
  },
  {
    "blb_donation_center_id": 5,
    "blb_donation_center_code": "158",
    "blb_donation_center_name": "เหล่ากาชาดจังหวัดกาฬสินธุ์",
    "blb_donation_center_addr": null,
    "blb_donation_center_tmb": null,
    "blb_donation_center_amp": null,
    "blb_donation_center_chw": null,
    "blb_donation_center_national": null,
    "blb_donation_center_email": null,
    "blb_donation_center_phone": null,
    "blb_donation_association_id": 5,
    "blb_donation_center_type_id": null
  },
  {
    "blb_donation_center_id": 6,
    "blb_donation_center_code": "147",
    "blb_donation_center_name": "เหล่ากาชาดจังหวัดกำแพงเพชร",
    "blb_donation_center_addr": null,
    "blb_donation_center_tmb": null,
    "blb_donation_center_amp": null,
    "blb_donation_center_chw": null,
    "blb_donation_center_national": null,
    "blb_donation_center_email": null,
    "blb_donation_center_phone": null,
    "blb_donation_association_id": 6,
    "blb_donation_center_type_id": null
  },
  {
    "blb_donation_center_id": 7,
    "blb_donation_center_code": "193",
    "blb_donation_center_name": "โรงพยาบาลคลองขลุง",
    "blb_donation_center_addr": null,
    "blb_donation_center_tmb": null,
    "blb_donation_center_amp": null,
    "blb_donation_center_chw": null,
    "blb_donation_center_national": null,
    "blb_donation_center_email": null,
    "blb_donation_center_phone": null,
    "blb_donation_association_id": 7,
    "blb_donation_center_type_id": null
  },
  {
    "blb_donation_center_id": 8,
    "blb_donation_center_code": "108",
    "blb_donation_center_name": "โรงพยาบาลขาณุวรลักษบุรี",
    "blb_donation_center_addr": null,
    "blb_donation_center_tmb": null,
    "blb_donation_center_amp": null,
    "blb_donation_center_chw": null,
    "blb_donation_center_national": null,
    "blb_donation_center_email": null,
    "blb_donation_center_phone": null,
    "blb_donation_association_id": 8,
    "blb_donation_center_type_id": null
  }
]
```
