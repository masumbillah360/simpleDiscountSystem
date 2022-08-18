const totalBalance = document.getElementById('totalBalance');
        const couponCode = document.getElementById('couponCode');
        const discountTotal = document.getElementById('discountTotal');
        discountTotal.innerText = totalBalance.innerText;
        document.getElementById('discountBtn').addEventListener('click',()=>{
            const totalBalanceString = totalBalance.innerText;
            const total = parseFloat(totalBalanceString);
            if (couponCode.value === 'DOM') {
                const totalDiscount = total*.30;
                const payTotalWithDiscount = total - totalDiscount;
                discountTotal.innerText = payTotalWithDiscount;
            }
            else{
                discountTotal.innerText = total;
            }
        })