# `rcpt_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| finance_number | varchar(7) | NO | PRI |  |  |  |
| rcpno | varchar(20) | YES | UNI | NULL |  |  |
| bill_amount | double(12,3) | YES |  | NULL |  |  |
| bill_date_time | datetime | YES | MUL | NULL |  |  |
| user | varchar(15) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| status | varchar(5) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| remain_money | double(15,3) | YES |  | NULL |  |  |
| computer | varchar(25) | YES |  | NULL |  |  |
| credit_card | char(1) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| book_number | int(11) | YES | MUL | NULL |  |  |
| bill_number | int(11) | YES | MUL | NULL |  |  |
| account_confirm | char(1) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| manual_discount | double(15,3) | YES |  | NULL |  |  |
| finance_pay_type_id | int(11) | YES |  | NULL |  |  |
| credit_card_amount | double(15,3) | YES |  | NULL |  |  |
| credit_card_id | int(11) | YES |  | NULL |  |  |
| credit_card_no | varchar(50) | YES |  | NULL |  |  |
| credit_card_owner | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| credit_transfer | char(1) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| bill_date | date | YES | MUL | NULL |  |  |
| bill_staff | varchar(50) | YES |  | NULL |  |  |
| cash_amount | double(15,3) | YES |  | NULL |  |  |
| deposit_debit_amount | double(15,3) | YES |  | NULL |  |  |
| receive_cash_amount | double(15,3) | YES |  | NULL |  |  |
| money_transmit | char(1) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| rcpt_print_trans_head_id | int(11) | YES | MUL | NULL |  |  |
| bill_time | time | YES |  | NULL |  |  |
| coupon_amount | double(15,3) | YES |  | NULL |  |  |
| coupon_no | varchar(50) | YES |  | NULL |  |  |
| special_discount_amount | double(15,3) | YES |  | NULL |  |  |
| kiosk_pay | char(1) | YES |  | NULL |  |  |
| kiosk_ref_no | varchar(50) | YES |  | NULL |  |  |
| change_money | double(15,2) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| qr_amount | double(15,3) | YES |  | NULL |  |  |
| qr_ref_code | varchar(200) | YES |  | NULL |  |  |
| rcpt_deposit_type_id | int(11) | YES |  | NULL |  |  |
| ktb_hw_amount | double(15,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_billnumber | bill_number | no | 1 |
| ix_bill_date | bill_date | no | 1 |
| ix_bill_date_time | bill_date_time | no | 1 |
| ix_booknumber | book_number | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_pttype | pttype | no | 1 |
| ix_trans_id | rcpt_print_trans_head_id | no | 1 |
| ix_user_bill_datetime | user | no | 1 |
| ix_user_bill_datetime | bill_date_time | no | 2 |
| ix_user_bill_datetime_index | bill_date_time | no | 1 |
| ix_user_bill_datetime_index | user | no | 2 |
| PRIMARY | finance_number | yes | 1 |
| rcpno_unique | rcpno | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "finance_number": "0143790",
    "rcpno": "0000:4",
    "bill_amount": 0.0,
    "bill_date_time": "2011-10-06 13:27:33",
    "user": "bms",
    "hn": "540001675",
    "vn": "541006083401",
    "status": "ABORT",
    "department": "OPD",
    "pttype": "10",
    "remain_money": null,
    "computer": "FINANCE-YUWA00",
    "credit_card": "N",
    "discount": 0.0,
    "book_number": 0,
    "bill_number": 4,
    "account_confirm": null,
    "total_amount": 0.0,
    "manual_discount": 0.0,
    "finance_pay_type_id": null,
    "credit_card_amount": null,
    "credit_card_id": null,
    "credit_card_no": null,
    "credit_card_owner": null,
    "hos_guid": null,
    "credit_transfer": null,
    "hos_guid_ext": null,
    "bill_date": null,
    "bill_staff": null,
    "cash_amount": null,
    "deposit_debit_amount": null,
    "receive_cash_amount": null,
    "money_transmit": null,
    "officer_id": null,
    "rcpt_print_trans_head_id": null,
    "bill_time": null,
    "coupon_amount": null,
    "coupon_no": null,
    "special_discount_amount": null,
    "kiosk_pay": null,
    "kiosk_ref_no": null,
    "change_money": null,
    "hospital_department_id": null,
    "qr_amount": null,
    "qr_ref_code": null,
    "rcpt_deposit_type_id": null,
    "ktb_hw_amount": null
  },
  {
    "finance_number": "0143798",
    "rcpno": "0001:0001",
    "bill_amount": 250.0,
    "bill_date_time": "2011-10-07 08:55:29",
    "user": "yuwa128",
    "hn": "560000990",
    "vn": "541007085331",
    "status": null,
    "department": "OPD",
    "pttype": "10",
    "remain_money": null,
    "computer": "FINANCE-YUWA00",
    "credit_card": "N",
    "discount": 0.0,
    "book_number": 1,
    "bill_number": 1,
    "account_confirm": "Y",
    "total_amount": 250.0,
    "manual_discount": 0.0,
    "finance_pay_type_id": null,
    "credit_card_amount": null,
    "credit_card_id": null,
    "credit_card_no": null,
    "credit_card_owner": null,
    "hos_guid": null,
    "credit_transfer": null,
    "hos_guid_ext": null,
    "bill_date": null,
    "bill_staff": null,
    "cash_amount": null,
    "deposit_debit_amount": null,
    "receive_cash_amount": null,
    "money_transmit": null,
    "officer_id": null,
    "rcpt_print_trans_head_id": null,
    "bill_time": null,
    "coupon_amount": null,
    "coupon_no": null,
    "special_discount_amount": null,
    "kiosk_pay": null,
    "kiosk_ref_no": null,
    "change_money": null,
    "hospital_department_id": null,
    "qr_amount": null,
    "qr_ref_code": null,
    "rcpt_deposit_type_id": null,
    "ktb_hw_amount": null
  },
  {
    "finance_number": "0143799",
    "rcpno": "0001:0002",
    "bill_amount": 450.0,
    "bill_date_time": "2011-10-07 11:30:31",
    "user": "yuwa128",
    "hn": "530135754",
    "vn": "541007092733",
    "status": null,
    "department": "OPD",
    "pttype": "10",
    "remain_money": null,
    "computer": "FINANCE-YUWA00",
    "credit_card": "N",
    "discount": 0.0,
    "book_number": 1,
    "bill_number": 2,
    "account_confirm": "Y",
    "total_amount": 450.0,
    "manual_discount": 0.0,
    "finance_pay_type_id": null,
    "credit_card_amount": null,
    "credit_card_id": null,
    "credit_card_no": null,
    "credit_card_owner": null,
    "hos_guid": null,
    "credit_transfer": null,
    "hos_guid_ext": null,
    "bill_date": null,
    "bill_staff": null,
    "cash_amount": null,
    "deposit_debit_amount": null,
    "receive_cash_amount": null,
    "money_transmit": null,
    "officer_id": null,
    "rcpt_print_trans_head_id": null,
    "bill_time": null,
    "coupon_amount": null,
    "coupon_no": null,
    "special_discount_amount": null,
    "kiosk_pay": null,
    "kiosk_ref_no": null,
    "change_money": null,
    "hospital_department_id": null,
    "qr_amount": null,
    "qr_ref_code": null,
    "rcpt_deposit_type_id": null,
    "ktb_hw_amount": null
  },
  {
    "finance_number": "0143800",
    "rcpno": "9999:001",
    "bill_amount": 170.0,
    "bill_date_time": "2011-10-07 11:37:10",
    "user": "yuwa128",
    "hn": "540001690",
    "vn": "541007104952",
    "status": null,
    "department": "OPD",
    "pttype": "10",
    "remain_money": null,
    "computer": "FINANCE-YUWA00",
    "credit_card": "N",
    "discount": 0.0,
    "book_number": 9999,
    "bill_number": 1,
    "account_confirm": null,
    "total_amount": 170.0,
    "manual_discount": 0.0,
    "finance_pay_type_id": null,
    "credit_card_amount": null,
    "credit_card_id": null,
    "credit_card_no": null,
    "credit_card_owner": null,
    "hos_guid": null,
    "credit_transfer": null,
    "hos_guid_ext": null,
    "bill_date": null,
    "bill_staff": null,
    "cash_amount": null,
    "deposit_debit_amount": null,
    "receive_cash_amount": null,
    "money_transmit": null,
    "officer_id": null,
    "rcpt_print_trans_head_id": null,
    "bill_time": null,
    "coupon_amount": null,
    "coupon_no": null,
    "special_discount_amount": null,
    "kiosk_pay": null,
    "kiosk_ref_no": null,
    "change_money": null,
    "hospital_department_id": null,
    "qr_amount": null,
    "qr_ref_code": null,
    "rcpt_deposit_type_id": null,
    "ktb_hw_amount": null
  },
  {
    "finance_number": "0143801",
    "rcpno": "0001:003",
    "bill_amount": 0.0,
    "bill_date_time": "2011-10-07 11:38:39",
    "user": "yuwa128",
    "hn": "540001692",
    "vn": "541007112502",
    "status": "ABORT",
    "department": "OPD",
    "pttype": "10",
    "remain_money": null,
    "computer": "FINANCE-YUWA00",
    "credit_card": "N",
    "discount": 0.0,
    "book_number": 1,
    "bill_number": 3,
    "account_confirm": "Y",
    "total_amount": 0.0,
    "manual_discount": 0.0,
    "finance_pay_type_id": null,
    "credit_card_amount": null,
    "credit_card_id": null,
    "credit_card_no": null,
    "credit_card_owner": null,
    "hos_guid": null,
    "credit_transfer": null,
    "hos_guid_ext": null,
    "bill_date": null,
    "bill_staff": null,
    "cash_amount": null,
    "deposit_debit_amount": null,
    "receive_cash_amount": null,
    "money_transmit": null,
    "officer_id": null,
    "rcpt_print_trans_head_id": null,
    "bill_time": null,
    "coupon_amount": null,
    "coupon_no": null,
    "special_discount_amount": null,
    "kiosk_pay": null,
    "kiosk_ref_no": null,
    "change_money": null,
    "hospital_department_id": null,
    "qr_amount": null,
    "qr_ref_code": null,
    "rcpt_deposit_type_id": null,
    "ktb_hw_amount": null
  },
  {
    "finance_number": "0143802",
    "rcpno": "0001:004",
    "bill_amount": 170.0,
    "bill_date_time": "2011-10-07 11:40:17",
    "user": "yuwa128",
    "hn": "540001692",
    "vn": "541007112502",
    "status": null,
    "department": "OPD",
    "pttype": "10",
    "remain_money": null,
    "computer": "FINANCE-YUWA00",
    "credit_card": "N",
    "discount": 0.0,
    "book_number": 1,
    "bill_number": 4,
    "account_confirm": "Y",
    "total_amount": 170.0,
    "manual_discount": 0.0,
    "finance_pay_type_id": null,
    "credit_card_amount": null,
    "credit_card_id": null,
    "credit_card_no": null,
    "credit_card_owner": null,
    "hos_guid": null,
    "credit_transfer": null,
    "hos_guid_ext": null,
    "bill_date": null,
    "bill_staff": null,
    "cash_amount": null,
    "deposit_debit_amount": null,
    "receive_cash_amount": null,
    "money_transmit": null,
    "officer_id": null,
    "rcpt_print_trans_head_id": null,
    "bill_time": null,
    "coupon_amount": null,
    "coupon_no": null,
    "special_discount_amount": null,
    "kiosk_pay": null,
    "kiosk_ref_no": null,
    "change_money": null,
    "hospital_department_id": null,
    "qr_amount": null,
    "qr_ref_code": null,
    "rcpt_deposit_type_id": null,
    "ktb_hw_amount": null
  },
  {
    "finance_number": "0143803",
    "rcpno": "0001:005",
    "bill_amount": 20.0,
    "bill_date_time": "2011-10-07 11:42:30",
    "user": "yuwa128",
    "hn": "540001691",
    "vn": "541007105838",
    "status": null,
    "department": "OPD",
    "pttype": "10",
    "remain_money": null,
    "computer": "FINANCE-YUWA00",
    "credit_card": "N",
    "discount": 0.0,
    "book_number": 1,
    "bill_number": 5,
    "account_confirm": "Y",
    "total_amount": 20.0,
    "manual_discount": 0.0,
    "finance_pay_type_id": null,
    "credit_card_amount": null,
    "credit_card_id": null,
    "credit_card_no": null,
    "credit_card_owner": null,
    "hos_guid": null,
    "credit_transfer": null,
    "hos_guid_ext": null,
    "bill_date": null,
    "bill_staff": null,
    "cash_amount": null,
    "deposit_debit_amount": null,
    "receive_cash_amount": null,
    "money_transmit": null,
    "officer_id": null,
    "rcpt_print_trans_head_id": null,
    "bill_time": null,
    "coupon_amount": null,
    "coupon_no": null,
    "special_discount_amount": null,
    "kiosk_pay": null,
    "kiosk_ref_no": null,
    "change_money": null,
    "hospital_department_id": null,
    "qr_amount": null,
    "qr_ref_code": null,
    "rcpt_deposit_type_id": null,
    "ktb_hw_amount": null
  },
  {
    "finance_number": "0143804",
    "rcpno": "0001:006",
    "bill_amount": 1510.0,
    "bill_date_time": "2011-10-07 11:47:27",
    "user": "yuwa128",
    "hn": "530080754",
    "vn": "541007091933",
    "status": null,
    "department": "OPD",
    "pttype": "10",
    "remain_money": null,
    "computer": "FINANCE-YUWA00",
    "credit_card": "N",
    "discount": 0.0,
    "book_number": 1,
    "bill_number": 6,
    "account_confirm": "Y",
    "total_amount": 1510.0,
    "manual_discount": 0.0,
    "finance_pay_type_id": null,
    "credit_card_amount": null,
    "credit_card_id": null,
    "credit_card_no": null,
    "credit_card_owner": null,
    "hos_guid": null,
    "credit_transfer": null,
    "hos_guid_ext": null,
    "bill_date": null,
    "bill_staff": null,
    "cash_amount": null,
    "deposit_debit_amount": null,
    "receive_cash_amount": null,
    "money_transmit": null,
    "officer_id": null,
    "rcpt_print_trans_head_id": null,
    "bill_time": null,
    "coupon_amount": null,
    "coupon_no": null,
    "special_discount_amount": null,
    "kiosk_pay": null,
    "kiosk_ref_no": null,
    "change_money": null,
    "hospital_department_id": null,
    "qr_amount": null,
    "qr_ref_code": null,
    "rcpt_deposit_type_id": null,
    "ktb_hw_amount": null
  }
]
```
